import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getClient } from "@/lib/crud";

const SportsDashboard = () => {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const client = getClient("sports-dashboard");
      const data = await client.getWithPrefix("sport:");
      setSportsData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sports Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sport</TableHead>
                <TableHead>Teams</TableHead>
                <TableHead>Players</TableHead>
                <TableHead>Events</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sportsData.map((sport) => (
                <TableRow key={sport.key}>
                  <TableCell>{sport.value.name}</TableCell>
                  <TableCell>{sport.value.teams}</TableCell>
                  <TableCell>{sport.value.players}</TableCell>
                  <TableCell>{sport.value.events}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SportsDashboard;